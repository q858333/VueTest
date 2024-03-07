import { reactive } from "vue";
import axios from "axios";

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_1823.jpg',
    ])

    async function addDog() {
        
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            dogList.push(result.data.message);
            console.log(result);

        } catch (error) {
            alert(error);
        }
    }

    return {dogList,addDog};
}