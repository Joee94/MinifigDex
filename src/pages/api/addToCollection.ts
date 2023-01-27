// Create a service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import type { NextApiRequest, NextApiResponse } from "next";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const credentials = {
  region: "us-west-2",
};

// Create an Amazon DynamoDB service client object.
export const ddbClient = new DynamoDBClient(credentials);

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions,
  unmarshallOptions,
});

type Command = "add" | "delete";

export const putItem = async (id: string, command: Command) => {
  // Set the parameters.
  const params = {
    TableName: "minifig_dex",
    Key: {
      username: "Joe",
    },
    UpdateExpression: `${command} #attrName :d`,
    ExpressionAttributeNames: {
      "#attrName": "minifigs",
    },
    ExpressionAttributeValues: {
      ":d": new Set([id]),
    },
  };
  try {
    const data = await ddbDocClient.send(new UpdateCommand(params));
    console.log("Success - item added or updated", data);
    return data;
  } catch (err: any) {
    console.log("Error", err.stack);
  }
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  try {
    const response = await putItem(data.id, data.command);
    res.status(200).json(JSON.stringify(response) as any);
  } catch (err) {
    console.log(err);
  }
}
