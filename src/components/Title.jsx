function Title({ text, size, color }) {
    return (
        <h1 className='title abacaxi container'>{text}</h1> 
    )
}

export default Title

// class -> className
// for -> htmlFor 
// <img > -> <img />

// Title({text: 2}) <h1 className='title'>2</h1> 
// Title({text: 'Oii'}) <h1 className='title'>OII</h1> 
// <Title text={2} /> 
// <Title text='Oii /> 

// function Title(props) {
//     return (
//         <h1 className='title'>{props.text}</h1> 
//     )
// }