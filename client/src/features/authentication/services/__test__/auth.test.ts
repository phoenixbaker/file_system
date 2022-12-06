import { logIn } from "../auth";

describe("User Authentication", () => {
  it("Returns user data if registered", async () => {
    const user = await logIn({
      email: "phoenixbvu@gmail.com",
      password: "disruckto2",
    });
    expect(user).toEqual({
      __v: 0,
      _id: "637beb75516412c9621e89a3",
      dir: ["637beb75516412c9621e89a2"],
      email: "phoenixbvu@gmail.com",
      name: "Phoenix Baker",
      password: "disruckto2",
    });
  });

  it("Returns invalid email if not registered", async () => {
    const user = await logIn({
      email: "testerror@error.com",
      password: "test1234",
    });
    expect(user).toEqual("Invalid Email");
  });

  it("Returns error for incorrect password", async () => {
    const user = await logIn({
      email: "phoenixbvu@gmail.com",
      password: "test1234",
    });
    expect(user).toBe("Invalid Password");
  });
});
