export type VisitData = {
    contractorId: string,
    customerId: string,
    petId: string,
    productId: string,
    vendorId: string,
    date: string//($date - time),
    comment?: string,
}

export type VisitDataWithId = VisitData & {
    id: string,
}