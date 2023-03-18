import React from "react";

const commentsData = [
    {
        name:"prashanth",
        comments:"One though eyes spoken upon some. Raven this before louder smiling.",
        replies:[
            {
                name:"keerti",
                comments:"Before my that he each i the nodded long heard. Remember lenore hear then said. And the the with all nothing the will at. It stood soul nameless if shaven..",
                replies:[]
            }
        ],
    },
    {
        name:"suresh",
        comments:"I it tempest be but the nothing thy bosoms my at. There shall methought then so bird grim no, in.",
        replies:[
            {
                name:"maitreya",
                comments:"Of morrow thy of the than flung methought grim i midnight, though your sorrowsorrow purple no this mystery you what.",
                replies:[
                    {
                        name:"vaali",
                        comments:"Still on yet shall with ghastly above you nights such, nothing velvet sent turning door the his i longer. And as floor rapping something croaking visiter my. Nevermore it.",
                        replies:[
                            {
                                name:"sena",
                                comments:"Door velvet said raven hath visiter, said nevermore the stopped.",
                                replies:[]
                            }
                        ]
                    },
                    {
                        name:"sadananda",
                        comments:"Not a that only lenore out came me you floor discourse, raven raven from surcease i me heart ah it.",
                        replies:[]
                    }
                ]
            }
        ],
    },
    {
        name:"vishwas",
        comments:"Shrieked quoth still his no sinking footfalls days.",
        replies:[
            {
                name:"abhishaya",
                comments:"Chamber curious evilprophet and lent yore, clasp word tinkled fancy and the heaven by one.",
                replies:[
                    {
                        name:"sukeerti",
                        comments:"Longer there that and eyes nevermore tempest with grim, weary door disaster floor shadow in on. And whose thing of moment. Still store sitting god spoken of but living ebony, door is to.",
                        replies:[]
                    },
                    {
                        name:"shashi",
                        comments:"For fast of chamber fancy in press that into my whom. I to spoken doubtless that of the.",
                        replies:[]
                    }
                ]
            }
        ],
    },
    {
        name:"ramesh",
        comments:"All home quoth raven token hear. Is fancy nepenthe leave stood. Curtain door countenance gave.",
        replies:[
            {
                name:"indradev",
                comments:"We nothing broken my sure in help my still my. And shadows gave shall of or soon discourse, smiling with liftednevermore wind i back implore or at only, a there or his was and i much, our still the.",
                replies:[
                    {
                        name:"devraya",
                        comments:"Soul door only came marvelled of stately, tis thereat sad visiter marvelled i nevermore. Its the raven fantastic truly and.",
                        replies:[]
                    }
                ]
            }
        ],
    },
    {
        name:"atreyya",
        comments:"Quaff i bust wandering but that thing nightly you nevermore, home for friends his burned is. Was lenore plutonian as hear perfumed.",
        replies:[],
    },
]

const Comment = ({ data }) =>{
    const { name, comments, replies} = data;
    return (
        <div className="flex p-2 mt-2 ">
            <img 
            className="w-6 h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc-wiispmJhA_NSp9otnE0B4pIkjFuEiNoJgDzG8Gstq85g4_mDt9z1e9O51Ad4RHqPs&usqp=CAU" 
            alt="user" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{comments}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment,index) => (
        <div key={index} >
            <Comment data={comment} />
            <div className="pl-2 border border-l-black ml-2">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className="p-2 m-5">
            <h1 className="text-2xl font-bold">Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;