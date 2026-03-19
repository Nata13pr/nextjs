'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";
import {IMeal} from "@/models/IMeal";

const db = sql('meals.db')

export const saveMeal = async (formData: FormData) => {
    const titleValue = formData.get('title');

    db.prepare(`insert into meals(title)
                values (?)`)
        .run(titleValue);
    revalidatePath('/')
}
export const getMeals = async (): Promise<IMeal[]> => {
    return db.prepare<IMeal[]>(`select *
                                from meals`).all() as IMeal[];
}
