import fallback from "./fallback";

describe("snapshot of error provided", () => {
  it("executes as expected", async () => {
    const response = await fallback({
      headers: {},
    } as any);
    expect(response).toMatchSnapshot();
  });
});
http://localhost:3000/prices/current/coingecko:bitcoin,ethereum:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
http://localhost:3000/prices/current/
http://localhost:3000/prices/update/coingecko:bitcoin,ethereum:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48