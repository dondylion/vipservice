import {makeAutoObservable} from "mobx";
import moment from "moment";

class TicketStore {
    active: boolean = false;
    fromCity: string = '';
    toCity:string = '';
    firstDate:string = '';
    secondDate:string = '';
    timeOption: Array<{from: string, to: string, isActive: boolean, id: number}> = [
        {from: '9:20', to: '11:05', isActive: true, id: 1},
        {from: '10:20', to: '12:05', isActive: false, id: 2},
        {from: '11:20', to: '13:05', isActive: false, id: 3},
    ];

    constructor () {
        makeAutoObservable(this);
    }

    checkDate = (date: string) => {
        return moment(date, 'DD.MM.YY', true).isValid()
    }

    checkForm = () => {
        if (this.fromCity.length > 0 && this.toCity.length > 0 && this.checkDate(this.firstDate)) {
            if (this.secondDate.length > 0) {
                this.active = this.checkDate(this.secondDate);
            } else {
                this.active = true;
            }
        } else {
            this.active = false;
        }
    }

    changeFromCity = (text: string) => {
        this.fromCity = text;
        this.checkForm();
    }

    changeToCity = (text: string) => {
        this.toCity = text;
        this.checkForm();
    }

    changeFirstDate = (text: string) => {
        this.firstDate = text;
        this.checkForm();
    }

    changeSecondDate = (text: string) => {
        this.secondDate = text;
        this.checkForm();
    }

    changeTime = (id) => {
        for (let i in this.timeOption) {
            this.timeOption[i].isActive = this.timeOption[i].id === id;
        }
    }
}

export default new TicketStore();