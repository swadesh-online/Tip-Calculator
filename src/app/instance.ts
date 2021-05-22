export class instance {

    totalBill!: number;
    satisfactionPercent!: number;
    split!: number;
    constructor(inst?: instance) {
        if (inst != null && inst != undefined) {
            this.totalBill = inst.totalBill;
            this.satisfactionPercent = inst.satisfactionPercent;
            this.split = inst.split;
        }
    }
}