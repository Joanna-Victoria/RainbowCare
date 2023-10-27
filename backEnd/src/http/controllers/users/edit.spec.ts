import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create_and_authenticate_user";
import { prisma } from "@/lib/prisma";

describe("Profile Controller (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to get user profile", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const user = await prisma.user.findFirstOrThrow();

    const result = await request(app.server)
      .put(`/users/edit/${user.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Edit",
        email: "edit.email@example.com",
      });

    expect(result.statusCode).toBe(204);
  });
});