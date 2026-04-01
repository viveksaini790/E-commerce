import React, { useEffect } from 'react'
import { useState } from 'react';
function Logic() {

    const array = [
        {
            id: 1,
            name: "vishal",
            price: 234,
            check: true
        },
        {
            id: 2,
            name: "vivel",
            price: 200,
            check: false
        },
        {
            id: 3,
            name: "robin",
            price: 100,
            check: true
        },
        {
            id: 4,
            name: "viyom",
            price: 89,
            check: true
        },
        {
            id: 5,
            name: "tushar",
            price: 204,
            check: false
        },
        {
            id: 6,
            name: "vipin",
            price: 123,
            check: true
        },
        {
            id: 7,
            name: "manoj",
            price: 989,
            check: true
        },
        {
            id: 8,
            name: "pawan",
            price: 899,
            check: false
        },

    ]
    
    const [filterdata, setfilterdata]=useState(array)
    const [data, setdata] = useState({
        truedata: "",
        falsedata: "",
        fiveid:"",
    });
    const [erorr, seterror]=useState(false)
    

    useEffect(() => {

        const falsedata = filterdata.filter((item) => item.name ==="tushar" || item.name ==="viyom") 
         console.log("falsedatavis",falsedata)
        const fasleprice = falsedata.reduce((total, item) => total + item.price, 0)
        //   console.log("fasleprice",fasleprice)
        //   setdata(fasleprice)
         setdata((pre) => (
            {
                ...pre,
                falsedata: fasleprice
            }
        )

        )

        const truedata = filterdata.filter((item) => item.check == true)
        //   console.log()
        const trueprice = truedata.reduce((pro, cal) => pro + cal.price, 0)
        console.log('trueprice', trueprice)
        setdata((pre) => (
            {
                ...pre,
                truedata: trueprice
            }
        )

        )

        const fivid= filterdata.filter((idd)=>idd.id>5)
        console.log('fiveid',fivid)
        const priceid=fivid.reduce((I, tm)=>I+tm.price,0)
        console.log('priceid',priceid)
        setdata((pre)=>({
            ...pre,
            fiveid:priceid
        }))

    }, [filterdata])
    // console.log("data",data)
  
    const handlechange=(value)=>{
        // const value=e.target.value
        // const dataa=filterdata.filter((item)=>item==e)
        console.log('dataa',typeof(value))
        if(value){
            
                const filtertext=array.filter((item)=>item.name.toLowerCase().trim().includes(value.trim())  
              || item.id==value
            )

                if(filtertext.length>0){
                    setfilterdata(filtertext)
                }else{
                       seterror(true)
                }
            
           
        }else{
            console.log("cledja vishal vksdj")
            setfilterdata(array)
            seterror(false) 
        }
    }


    return (
        <>
            <div>Logic</div>
            <div style={{ display: "flex", gap: "200px" }}>
                {erorr?(
                    <>
                    <h2>data not found</h2>
                    </>
                ):
                <div>
                    <h1>left</h1>
                    {filterdata.map((item) => (
                        <>
                            <div style={{ padding: "10px 0px" }}>
                                <h1>id:{item.id}</h1>
                                <p>name:{item.name}</p>
                                <p>price:{item.price}</p>

                                {/* <p>check:{item.check}</p> */}

                            </div>


                        </>
                    )
                    )}
                </div>
                
            }
                <div>
                    <h1>right</h1>
                    {data && (
              <>
              <h1>false:{data.falsedata}</h1>
              <h1>true:{data.truedata}</h1>
              <h2>collect Id :{data.fiveid}</h2>
              </>
              
            )}
                </div>
                <div>
                    <h2>how are you</h2>
                    <input type="text"
                    
                    onChange={(e)=>handlechange(e.target.value)}
                     />
                </div>
            </div>
        </>
    )
}

export default Logic