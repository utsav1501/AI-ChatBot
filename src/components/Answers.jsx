import React, { useEffect, useState } from 'react'
import { checkHeading, replaceHeadingStarts } from '../Helper';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown'

const Answers = ({ans,anskey,totalResult,type}) => {
    const [heading,setHeading]=useState(false);
    const [answer,setAnswer]=useState(ans);
    useEffect(()=>{
        if(checkHeading(ans)){
        setHeading(true);
        setAnswer(replaceHeadingStarts(ans));
    }
    },[])

    const renderer={
      code({node,inline,className,children,...props}){
        const match=/language-(\w+)/.exec(className || '');
        return !inline && match?(
          <SyntaxHighlighter 
          {...props} children={String(children).replace(/n$/,'')}
          language={match[1]}
          style={dark}
          PreTag="div"
        />
        ):(<code {...props} className='className'>{children}</code>)
      }
    }

  return (
  <>
    {anskey==0 && totalResult>1 ?<span className='pt-2 text-xl block dark:text-white'>{answer}</span>:
      heading?<span className='pt-2 dark:text-white text-lg block'>{answer}</span>:<span className={type=='q'?'pl-1 flex':"pl-5"} >
        <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
      </span>
    }

    </>
  )
}

export default Answers
