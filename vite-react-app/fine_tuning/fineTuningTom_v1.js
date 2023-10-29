import fs from 'fs';
import fetch from 'node-fetch';
import OpenAI, { toFile } from 'openai';
const fileName = "fineTuningTp,_v1.json"
const openai = new OpenAI();

// If you have access to Node fs we recommend using fs.createReadStream():
await openai.files.create({ file: fs.createReadStream(fileName), purpose: 'fine-tune' });

// Or if you have the web File API you can pass a File instance:
await openai.files.create({ file: new File(['my bytes'], fileName), purpose: 'fine-tune' });

// You can also pass a fetch Response:
await openai.files.create({ file: await fetch('https://somesite/'+fileName), purpose: 'fine-tune' });
