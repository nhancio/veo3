import { fal } from "@fal-ai/client";

// Configure the FAL client with the API key from environment variables
const FAL_KEY = import.meta.env.VITE_FAL_API_KEY;

if (!FAL_KEY) {
  throw new Error('FAL API key is not configured. Please set VITE_FAL_API_KEY in your .env file');
}

// Initialize the FAL client with the API key
fal.config({
  credentials: FAL_KEY
});

// Types for the FAL API response
export interface VideoFile {
  url: string;
  content_type: string;
  file_name: string;
  file_size: number;
}

export interface VideoGenerationResult {
  video: VideoFile;
  requestId: string;
}


export async function generateFastSDXL(prompt: string): Promise<VideoGenerationResult> {
  try {
    console.log('[FAL] Starting video generation with prompt:', prompt);
    
    if (!prompt || prompt.trim().length === 0) {
      throw new Error('Prompt cannot be empty');
    }

    // Log the FAL API key status (without exposing the actual key)
    console.log('[FAL] API Key configured:', FAL_KEY ? 'Yes' : 'No');
    
    // Submit the generation request
    console.log('[FAL] Sending request to FAL API...');
    const result = await fal.run("fal-ai/veo3/fast", {
      input: {
        prompt: prompt,
        aspect_ratio: "16:9",
        duration: "8s",
        enhance_prompt: true,
        generate_audio: true
      }
    }).catch(error => {
      console.error('[FAL] API Error:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('[FAL] Error response data:', error.response.data);
        console.error('[FAL] Error status:', error.response.status);
        console.error('[FAL] Error headers:', error.response.headers);
        throw new Error(`API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('[FAL] No response received:', error.request);
        throw new Error('No response received from the server. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('[FAL] Request setup error:', error.message);
        throw new Error(`Request setup error: ${error.message}`);
      }
    });

    console.log('[FAL] Video generation completed:', result);
    
    // Type assertion for the response
    const response = result as any;
    
    if (!response?.video) {
      console.error('[FAL] No video in response:', response);
      throw new Error('No video was generated in the response. The API response was: ' + JSON.stringify(response, null, 2));
    }
    
    return {
      video: response.video,
      requestId: response.request_id || ''
    };
  } catch (error) {
    console.error('[FAL] Video generation failed:', error);
    throw new Error(`Failed to generate video: ${error instanceof Error ? error.message : String(error)}`);
  }
}
