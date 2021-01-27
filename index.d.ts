declare namespace BillplzV4 {
    // api options type
    interface BillplzOptions {
        key: string;
        endpoint?: string;
        sandbox?: boolean;
    }

    // collection type
    interface CollectionArguments {
        title: string;
    }

    // open collection type
    interface OpenCollectionArguments {
        title: string;
        description: string;
        amount: number;
        fixed_amount?: boolean;
        fixed_quantity?: boolean;
        payment_button?: string;
        reference_1_label?: string
        reference_2_label?: string;
        email_link?: string;
        tax?: number;
    }

    // bill type
    interface BillArguments {
        collection_id: string;
        email: string;
        mobile: number;
        name: string;
        amount: number;
        callback_url: string;
        description: string;
        due_at?: string;
        redirect_url?: string;
        deliver?: boolean;
        reference_1_label?: string;
        reference_1?: string;
        reference_2_label?: string;
        reference_2?: string;
    }

    // payout argument
    interface PayoutArgument {
        mass_payment_instruction_collection_id: string;
        bank_code: string;
        bank_account_number: string;
        identitiy_number: string;
        name: string;
        description: string;
        total: number;
    }
}

declare class BillplzV4 {
    // constructor
    constructor(options: string | BillplzV4.BillplzOptions);

    // create_collection
    create_collection(title: BillplzV4.CollectionArguments, callback?: (res: any, err: any) => void): void;

    // create collectionOpen
    create_collectionOpen(args: BillplzV4.OpenCollectionArguments, callback?: (res: any, err: any) => void): void;

    // create bill
    create_bill(args: BillplzV4.BillArguments, callback?: (res: any, err: any) => void): void;

    // get bill
    get_bill(billId: string, callback?: (res: any, err: any) => void): void;

    // delete bill
    delete_bill(billId: string, callback?: (res: any, err: any) => void): void;

    // change_collection status
    change_collection_status(collectionId: string, status: string, callback?: (res: any, err: any) => void): void;

    // registration check
    registration_check(bankAccountNumber: string, callback?: (res: any, err: any) => void): void;

    /// create payout
    create_payout(args: BillplzV4.PayoutArgument, callback?: (res: any, err: any) => void): void;
}

export = BillplzV4;
