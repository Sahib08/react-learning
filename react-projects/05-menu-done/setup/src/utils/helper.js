const truncateAfterWord = (str) =>  {
    const chars = 100; 
    const placeholder = '…'
    return str.length < chars ? str : `${str.substr( 0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`};

export {
    truncateAfterWord
}