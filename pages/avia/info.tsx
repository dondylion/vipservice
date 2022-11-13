import {observer} from "mobx-react-lite";
import ticketStore from "../../store/ticketStore";
import S7 from '../../public/S7.png';
import Image from 'next/image';
import Scheme from "../../public/Scheme";
import moment from 'moment';
import Bagage from "../../public/Bagage";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Ticket from "./_ticket";

const Info = observer (() => {
    const {secondDate, active, checkDate} = ticketStore;
    const router = useRouter();

    useEffect(() => {
        if (!active) router.push('/avia');
    }, [])

    return (
        <>{active && <div className="w-[962px] mx-auto shadow-box rounded-[15px] flex flex-row justify-between">
            <div className="border-r border-r-[#DDE3EE]">
                <Ticket direction="from"/>
                {checkDate(secondDate) && <Ticket direction="back"/>}
            </div>

            <div className="font-bold text-[32px] text-[#232323] mx-auto my-auto">
                {!checkDate(secondDate) ? '4 150 ₽' : '9 300 ₽'}
            </div>
        </div>}</>
    );
})

export default Info;