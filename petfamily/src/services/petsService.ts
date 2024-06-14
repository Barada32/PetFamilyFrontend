import axios from "axios";
import { Envelope } from "../types/Envelope";
import { Pet } from "../types/Pet";

const PETS_URL = "http://localhost:5000/pet";

export const getPets = async (): Promise<Pet[] | null> => {
	const response = await axios.get<Envelope<Pet[]>>(PETS_URL);

	return response.data.result;
};
