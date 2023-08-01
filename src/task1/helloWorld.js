
export default function (_req, res) {
    try {
        return res.status(200).send('Hello, World!');

    } catch (error) {
        console.log(error);
        return res.sendStatus(500).send('Internal Server Error');
    }
}


