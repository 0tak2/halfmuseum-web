const helloWorld = async () => {
    const result = await fetch('https://www.naver.com');
    console.log(await result.text());
}

export { helloWorld };