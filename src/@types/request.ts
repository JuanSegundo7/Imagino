interface RequestBody {
    cfg_scale: number;
    clip_guidance_preset: string;
    height: number;
    width: number;
    samples: number;
    steps: number;
    text_prompts: { text: string; weight: number }[];
    style_preset?: string; 
}

interface GenerationResponse {
    artifacts: Array<{
        base64: string
        seed: number
        finishReason: string
    }>
}