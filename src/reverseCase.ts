function reverseCase(input: string): string {
    const splitted = input.split('')
    const swappedCase = splitted.reduce((acc: string[], current: string) => {
        acc.push(current === current.toLowerCase() ?
            current.toUpperCase() :
            current.toLowerCase());
        return acc
    }, []);
    return swappedCase.reverse().join('');
}

export default reverseCase;