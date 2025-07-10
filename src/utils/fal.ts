export async function generateFastSDXL(prompt: string) {
  const apiKey = import.meta.env.VITE_FAL_API_KEY;
  if (!apiKey) {
    console.error('FAL API key is not set in environment variables');
    throw new Error('FAL API key is not set in environment variables');
  }

  // Mask API key for logging
  const maskedKey = apiKey.slice(0, 8) + '...' + apiKey.slice(-4);
  console.log('[FAL] Using API key:', maskedKey);

  const url = 'https://queue.fal.run/fal-ai/fast-sdxl';
  const headers = {
    'Authorization': `key ${apiKey}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = encodeURIComponent(JSON.stringify({ prompt }));
  console.log('[FAL] Request body:', { prompt });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: `${body}=`,
    });
    console.log('[FAL] Response status:', response.status);
    const responseData = await response.json().catch(() => null);
    console.log('[FAL] Response data:', responseData);
    if (!response.ok) {
      throw new Error(`API error: ${response.status} - ${JSON.stringify(responseData)}`);
    }
    return responseData;
  } catch (error) {
    console.error('[FAL] API call failed:', error);
    throw new Error(`Failed to call FAL API: ${error}`);
  }
}
