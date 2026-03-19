import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {

    const mealsArray = await getMeals()

    return (
        <div>
            <Form action={saveMeal}>
                <input type="text" name='title'/>
                <button>send</button>
            </Form>
            <div>
                {
                    mealsArray.map(meal => <div key={meal.id}>{meal.title}</div>)
                }
            </div>
        </div>
    );
}
