import{test,expect}from'@playwright/test';

test('API test example',async({request})=>{

    const getResponse = await request.get("https://reqres.in/api/users");
    expect(getResponse.status()).toBe(200);

    const text = await getResponse.text();
    expect(text).toContain("George");

    console.log(text);
});

test('API POST request example',async({request})=>{

    const respost = await request.post("https://reqres.in/api/users",{
        data:{
            name: "Shreyas",
            job: "Automation"
        }
    })

    expect(Response.status()).toBe(201);
    const responseBody = await respost.json();
    expect(responseBody).toHaveTest("name","Shreyas")   ;
});
