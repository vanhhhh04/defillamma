import { IResponse, wrap, errorResponse } from "./utils/shared";

const handler = async (
  event: AWSLambda.APIGatewayEvent
): Promise<IResponse> => {
  // Skip favicon.ico requests (handle multiple event shapes)
  if (
    event.path === "/favicon.ico" ||
    (event as any).rawPath === "/favicon.ico" ||
    (event.pathParameters && event.pathParameters.params === "favicon.ico")
  ) {
    return {
      statusCode: 204,
      body: "",
      headers: {
        "Cache-Control": `max-age=${3600}`,
      },
    };
  }

  const response = errorResponse({
    message: "This endpoint doesn't exist",
  } as any);
  if(response.headers===undefined){
    response.headers={}
  }
  response.headers["Cache-Control"] = `max-age=${3600}`; // 1hr

  return response;
};

export default wrap(handler);
