import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from 'next/server'

export async function GET() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");

  //Read the json data file
  const fileContent = await fs.readFile(jsonDirectory + "/jobs.json", "utf8");
  
  // Parse JSON string to JSON object
  const json = JSON.parse(fileContent);

  //Return the content of the data file in json format
  return NextResponse.json(json);
}