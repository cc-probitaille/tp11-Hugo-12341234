export function créerInstanceParRéflexion(nomClasse?: string): any {
  const RéférenceClasse = nomClasse && (globalThis as any)[nomClasse];
  if (!RéférenceClasse) {
    throw new Error(`Classe '${nomClasse}' introuvable.`);
  }

  return new RéférenceClasse();
}
