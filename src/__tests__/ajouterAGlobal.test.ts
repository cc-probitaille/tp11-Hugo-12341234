import "../ajouterAGlobal";

describe("Ajout des classes à l'espace global", () => {
  test("Voiture est ajoutée à l'espace global", () => {
    expect(globalThis.Voiture).toBeDefined();
    expect(typeof globalThis.Voiture).toBe("function");
  });

  test("Vélo est ajouté à l'espace global", () => {
    expect(globalThis.Velo).toBeDefined();
    expect(typeof globalThis.Velo).toBe("function");
  });
});
