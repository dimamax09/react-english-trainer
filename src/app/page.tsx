import {Button} from "@mui/material";
import {Lusitana} from "next/font/google";

const lusitana = Lusitana({subsets: ['latin'], weight: "400"})

export default function Home() {
    return (
        <main>
            <p className={lusitana.className}>fds</p>
            <Button></Button>
        </main>
    );
}
