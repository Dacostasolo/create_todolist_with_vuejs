var Entries = [
    {
        "category":"Film",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Who directed the movies &quot;Pulp Fiction&quot;, &quot;Reservoir Dogs&quot; and &quot;Django Unchained&quot;?",
        "answer":[
            "Martin Scorcese",
            "Steven Spielberg",
            "Quentin Tarantino",
            "James Cameron"
        ],
        "show":false
    },
    {
        "category":"Video Games",
        "type" : "multiple",
        "difficulty":"hard",
        "question":"When was Steam first released?",
        "answer":[
            "2004","2003","2011","2007"
        ],
        "show":false
    },
    {
        "category":"Geography",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Which one of these countries borders with Poland?",
        "answer":[
            "Lithuania", "France","Norway","Netherlands"
        ],
        "show":false
    },
    {
        "category":"Video Games",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Valve Corporation is an American video game developer located in which city?",
        "answer":[
            "Austin, Texas","Seattle, Washington","San Francisco, California","Bellevue, Washington",
        ],
        "show":false
    },
    {
        "category":"Cartoon and Animations",
        "type":"multiple",
        "difficulty":"medium",
        "question":"Adam West was the mayor of which cartoon town?",
        "answer":[
            "Springfield","Quahog","South Park","Langley Falls"
        ],
        "show":false
    },
    {
        "category":"Politics",
        "type":"multiple",
        "difficulty":"hard",
        "question":"Which of these was an official candidate in the 2017 British General Election?",
        "answer":[
            "James Francis","Lord Buckethead","Robert Wimbledon","Sir Crumpetsby"
        ],
        "show":false
    },
    {
        "category":"Entertainment: Music",
        "type":"multiple",
        "difficulty":"easy",
        "question":"The band Muse released their first album, Showbiz, in what year?",
        "answer":[
      
       "1998","1999","2000","2001"
    ],
    "show":false
},
{
    "category":"History",
    "type":"boolean",
    "difficulty":"easy",
    "question":"The United States of America was the first country to launch a man into space.",
    "answer":[
        "True","False",
    ],
    "show":false
},
{
    "category":"Geography",
    "type":"multiple",
    "difficulty":"medium",
    "question":"Which English county will you find the University of East Anglia?",
    "answer":
  
    [
        "Suffolk","Essex","Cambridgeshire","Norfolk",
    ],
    "show":false
},
{
    "category":"Science & Nature",
    "type":"multiple",
    "difficulty":"hard",
    "question":"How many types of quarks are there in the standard model of physics?",
    "answer":[
        "2","3","4","6",
    ],
    "show":false
}
]
 


const app = Vue.createApp({
    data(){
        return{
            dataset : Entries,
            datacolumns : ["questions","category",]
        }
    }
})

app.component("database-component",{
    template: "#database-component",
    props: {
        filterkey : String,
        categories : String,
        questions : String,
        entries : Array,
        answers : Array,
        show:Boolean
      
       
    },
         
    data : function() {
        return{
            sortkey : ""
        }
    },

    computed: {
        serchflter(){
            const filter = this.filterkey
            const sortkey = this.sortkey
            const order = this.sortColumns(sortkey) || 1
            let entries = this.Entries 


            if(filter){
              entries =  entries.filter(function(row){
                    return Object.keys(row).some(function(key){
                        return String(row[key]).toLowerCase().includes(filterkey.toLowerCase())
                    })
                })

            }

            if(sortkey){
                entries = entries.slice().sort(function(x,y){
                    x = x[sortkey]
                    y = y[sortkey]
                    return ( x === y ? 0 : x > y ? 1 : -1 )* order;
                })
            }
        },
        sortColumns(){
           
            const sortedColumns = {}
    
            this.columns.forEach(function(key) {
                sortedColumns[key] = 1
                
            });

            return sortedColumns
        }
    },
    methods: {
        capitalise(inputstring){
            return inputstring.charAt(0).toUpperCase() + inputstring.slice(1);
        },

        sortBy(key){
            this.sortkey = key
            this.sortColumns[key] = this.sortColumns[key] * -1 
        },
        mixAnswers(answers){

        }
    },
})

const vm = app.mount("#database-website")