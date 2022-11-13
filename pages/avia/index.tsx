import {observer} from "mobx-react-lite";
import Calendar from "../../public/Calendar";
import ticketStore from "../../store/ticketStore";
import {useRouter} from "next/router";

const Avia = observer (() => {
    const router = useRouter();
    const {
        active, fromCity, toCity, firstDate, secondDate,
        changeFirstDate, changeFromCity, changeSecondDate, changeToCity, checkDate,
    } = ticketStore;

    return (
        <div className="w-[962px] mx-auto">
            <div className="bg-[#5C87DB] flex flex-row justify-between p-[30px] pt-[17px] rounded-t-[15px]">
                <div>
                    <p className="text-[13px] text-white">Откуда</p>
                    <input
                        className="rounded-[10px] text-[14px] p-[12px] w-[208px] font-bold"
                        placeholder="Город вылета"
                        value={fromCity}
                        onChange={(e) => changeFromCity(e.target.value)}
                    />
                </div>
                <div>
                    <p className="text-[13px] text-white">Куда</p>
                    <input
                        className="rounded-[10px] text-[14px] p-[12px] w-[208px] font-bold"
                        placeholder="Город прилёта"
                        value={toCity}
                        onChange={(e) => changeToCity(e.target.value)}
                    />
                </div>
                <div>
                    <p className="text-[13px] text-white">Туда</p>
                    <div className="flex flex-row relative">
                        <span className="absolute top-[14px] left-[12px]">
                            <Calendar color={checkDate(firstDate) ? "#5C87DB" : "#5C5C5C"}/>
                        </span>
                        <input
                            className="rounded-[10px] text-[14px] p-[12px] pl-[32px] w-[208px] font-bold"
                            placeholder="дд.мм.гг"
                            value={firstDate}
                            onChange={(e) => changeFirstDate(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <p className="text-[13px] text-white">Обратно</p>
                    <div className="flex flex-row relative">
                        <span className="absolute top-[14px] left-[12px]">
                            <Calendar color={checkDate(secondDate) ? "#5C87DB" : "#5C5C5C"}/>
                        </span>
                        <input
                            className="rounded-[10px] text-[14px] p-[12px] pl-[32px] w-[208px] font-bold"
                            placeholder="дд.мм.гг"
                            value={secondDate}
                            onChange={(e) => changeSecondDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-end rounded-b-[15px] py-[23px] px-[29px] shadow-lg">
                <button
                    className={
                        `${active ?
                            'bg-[#5C87DB] hover:text-white/50 active:bg-[#3E67B7] active:text-white' :
                            'bg-[#B7BAC1] cursor-not-allowed'} 
                        rounded-[10px] text-white text-[14px] py-[13px] px-[30px]`
                    }
                    onClick={() => {
                        if (active) router.push('/avia/info');
                    }}
                >
                    Найти билеты
                </button>
            </div>
        </div>
    );
})

export default Avia;