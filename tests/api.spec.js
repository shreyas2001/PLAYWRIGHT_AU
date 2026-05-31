import{test,expect}from'@playwright/test';

test('API test example',async({request})=>{

    const getResponse = await request.get("https://jsonplaceholder.typicode.com/users");
    expect(getResponse.status()).toBe(200);

    const text = await getResponse.text();
    expect(text).toContain("Leanne Graham");

    console.log(text);
});

test('API POST request example',async({request})=>{

    const respost = await request.post("https://jsonplaceholder.typicode.com/users",{
        data:{
            id: 1,
            name: "Shreyas",
            username: "Automation"
        }
    })

    expect(respost.status()).toBe(201);
    const responseBody = await respost.json();
    expect(responseBody).toHaveProperty("name", "Shreyas");
});
