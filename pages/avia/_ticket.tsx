import {observer} from "mobx-react-lite";
import ticketStore from "../../store/ticketStore";
import S7 from '../../public/S7.png';
import Image from 'next/image';
import Scheme from "../../public/Scheme";
import moment from 'moment';
import Bagage from "../../public/Bagage";

const Ticket = observer((props: {direction: 'from' | 'back'}) => {
    const {
        firstDate, secondDate, fromCity, toCity,
        timeOption, changeTime, checkDate
    } = ticketStore;
    const {direction} = props;
    const activeTime = timeOption.find(el => el.isActive);

    return (
        <div
            className={`flex flex-row justify-between ${checkDate(secondDate) ? 'pb-[40px]' : ''}`}
        >
            <div>
                <div
                    className="text-[12px] text-white bg-[#8BA5D8] rounded-tl-[15px] rounded-br-[15px] py-[4px] text-center"
                >
                    Невозвратный
                </div>
                <Image src={S7} alt="S7" className="h-[39px] w-[39px] mx-auto mt-[28px]"/>
                <p className="mx-[23px] mt-[8px] text-[21px] text-[#5C5C5C]">
                    S7 Airlines
                </p>
            </div>

            <div className={`flex flex-col pr-[20px] pl-[25px] ${direction === 'back' ? 'border-t border-dashed border-[#5C87DB]' : 0}`}>
                <div className="flex flex-row justify-between h-full">
                    <div className="mt-[41px] mr-[10px] w-[100px] whitespace-nowrap">
                        <p className="text-[24px] leading-[24px] font-bold text-[#232323] mb-[8px]">
                            {activeTime.from}
                        </p>
                        <p className="text-[14px] leading-[14px] text-[#5C5C5C] font-medium">
                            {direction === 'from' ? fromCity : toCity}
                        </p>
                        <p className="text-[14px] leading-[14px] text-[#5C5C5C]">
                            {
                                direction === 'from' ?
                                    moment(firstDate, 'DD.MM.YY').format('DD.MM.YYYY') :
                                    moment(secondDate, 'DD.MM.YY').format('DD.MM.YYYY')
                            }
                        </p>
                    </div>

                    <div className="mt-[32px]"><Scheme/></div>

                    <div className="mt-[41px] ml-[40px] mr-[33px] w-[100px] whitespace-nowrap">
                        <p className="text-[24px] leading-[24px] font-bold text-[#232323] mb-[8px]">
                            {activeTime.to}
                        </p>
                        <p className="text-[14px] leading-[14px] text-[#5C5C5C] font-medium">
                            {direction === 'from' ? toCity : fromCity}
                        </p>
                        <p className="text-[14px] leading-[14px] text-[#5C5C5C]">
                            {
                                direction === 'from' ?
                                    moment(firstDate, 'DD.MM.YY').format('DD.MM.YYYY') :
                                    moment(secondDate, 'DD.MM.YY').format('DD.MM.YYYY')
                            }
                        </p>
                    </div>

                    <div><Bagage/></div>
                </div>
                {!checkDate(secondDate) &&
                    <div className="flex flex-row mb-[27px] mt-[24px]">
                        {timeOption.map((item) => {
                            return (
                                <div
                                    className={`rounded-[10px] font-medium mr-[20px] h-min mt-auto cursor-pointer 
                                    ${item.isActive ? 'text-black py-[9px] pl-[15px] pr-[18px] bg-[#DDE3EE]' :
                                    'text-[#5C5C5C] py-[3px] pr-[7px] pl-[3px] border border-[#B7BAC1]'}`}
                                    onClick={() => changeTime(item.id)}
                                    key={item.id}
                                >
                                    <span className="text-[18px]">{item.from}</span>
                                    <span className="mx-[3px]">-</span>
                                    <span className="text-[14px]">{item.to}</span>
                                </div>
                            );
                        })}
                    </div>
                } 
            </div>
        </div>
    );
})

export default Ticket;