import React from 'react';

// import BealeCipher2 from './BealeCode2txt';
// import Declaration from './Declarationtxt';

// import bealeciphertext from './bealeCipher2.txt'
// import declarationtext from './declaration.txt'


function BealeCipher() {

    // with open("./src/beale_cipher/declaration.txt") as declaration:    
    //     var declaration = declaration.read()

    // bealecipher2 = bealecipher2.read();
    // decoded_code = decoded_code.read();

    // var book1 = declarationtext.split();
    //var code_array = bealeciphertext.split();

    var plain_text = "";
    var str = "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.He has refused his Assent to Laws, the most wholesome and necessary for the public good."
    var declar = str.split(" ");
    var bealecode = "115 73 24 807 37 52 49 17 31 62"
    var rescode = bealecode.split(" ");

    var i;
    for (i = 0; i < declar.length; i++) {
        var str1 = declar[i]
        var letter = str1
        var textt = plain_text += letter
        //    if(rescode.includes("115")){
        //        console.log("lettrCode:", declar[116])
        //        break
        //    }
        //    console.log('nooo')
    }

    //console.log(rescode, "AAA")
    //console.log(bealecode, "Code")
    // console.log(plain_text, "Text")
    //console.log(declar)





    return (
        <div className='PageLayout'>

            {/* <div>
                <h3>rescode1={rescode[0]}</h3>
                <h3>{rescode}</h3>
                <h3>H3Text: {textt}</h3>
            </div> */}
{/* 
            <div>
                <h3>BealeCipher2:
                {rescode.map((ii, a) => (
                    <option key={a} value={a}>
                        index: {ii} letter: {a}
                    </option>
                ))}
                </h3>
            </div> */}

            <div>
                <div>
                    <h2>DECLAR:</h2>
                    <h3 className='declar2'>
                        {declar.map((l, ii) => (

                            <option key={ii} value={ii}>
                                {ii + 1} {l}
                            </option>
                        ))}
                    </h3>
                </div>
            </div>


            {/* <BealeCipher2/>
            <Declaration/> */}
        </div>
    );

}

export default BealeCipher;