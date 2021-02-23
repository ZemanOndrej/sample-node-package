import reverseCase from './reverseCase';
import main from './main';


module.exports = {
    reverseCase,
    startProgram: main,
}

if (require.main === module) {
    main()
} 