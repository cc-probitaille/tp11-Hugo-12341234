import "./ajouterAGlobal";
import { créerInstanceParRéflexion } from "./CreerInstanceParReflexion";
import * as dotenv from 'dotenv';

dotenv.config();

const nomClasse = process.env.NOM_CLASSE;

try {
  const instance = créerInstanceParRéflexion(nomClasse!);
  console.log(instance.démarrer());
} catch (erreur: any) {
  console.error(erreur.message);
}
