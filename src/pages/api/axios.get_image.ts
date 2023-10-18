const get_image = async (
  goodInputs: string,
  badInputs?: string,
  model?: string,
  style?: string
) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AI_KEY}`,
  };

  const requestBody: RequestBody = {
    cfg_scale: 7,
    clip_guidance_preset: "FAST_BLUE",
    height: 512,
    width: 512,
    samples: 1,
    steps: 30,
    text_prompts: [
      {
        text: goodInputs,
        weight: 1,
      },
    ],
  };

  if (
    model === "stable-diffusion-xl-1024-v1-0" ||
    model === "stable-diffusion-xl-1024-v0-9"
  ) {
    requestBody.height = 1024;
    requestBody.width = 1024;
  }

  if (badInputs) {
    requestBody.text_prompts.push({
      text: badInputs as string,
      weight: -1,
    });
  }

  if (style && style !== "none") {
    requestBody.style_preset = style;
  }
  const res = await fetch(
    `https://api.stability.ai/v1/generation/${model}/text-to-image`,
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify(requestBody),
    }
  );

  if (!res.ok) {
    throw new Error(`Non-200 response: ${await res.text()}`);
  }

  const data = (await res.json()) as GenerationResponse;

  return `data:image/jpeg;base64,${data.artifacts[0].base64}`;
};

export default get_image;
