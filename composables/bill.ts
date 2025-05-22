export const bills = () => {
    const bills = useState<Array<any>>('bills', () => [])
    return bills.value 
}