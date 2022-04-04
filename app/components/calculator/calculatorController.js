'use strict';


class CalculatorController {

    sumAndCheckPrime = async (req, res) => {
        try {
            let numbers = req.body.numbers;

            let sum = numbers.reduce((a, b) => a + b, 0);

            let isPrime = await this.isPrime(req, res, sum);
            let isPrimeResult = isPrime.isPrimeResult

            return res.status(200).json(
                { "result": sum, "isPrime": isPrimeResult }
            )
        } catch (error) {
            console.log(error)
        }
    }

    checkPrime = async (req, res,) => {
        try {
            let number = req.params.number;
            let isPrime = await this.isPrime(req, res, number);
            let isPrimeResult = isPrime.isPrimeResult
            return res.status(200).json(
                { "isPrime": isPrimeResult }
            )
        } catch (error) {
            console.log(error)
        }
    }


    isPrime = (req, res, num) => {
        if (num <= 1) {
            return ({ isPrimeResult: false });
        } else {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) {
                    return ({ isPrimeResult: false });
                }
            }
            return ({ isPrimeResult: true });
        }
    }

}

const calculatorController = new CalculatorController();
export default calculatorController;
