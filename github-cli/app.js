import readlineSync from 'readline-sync';
import axios from 'axios';
import chalk from 'chalk';
console.clear()
console.log(chalk.yellow("------------------------------------------------------------------------------------------------------------------------------"))
console.log(chalk.red("\t \t \t \t \t  Developers Arena CLI Application \t \t \t \t \t \t"))
console.log(chalk.yellow("------------------------------------------------------------------------------------------------------------------------------"))
console.log(chalk.red("\t \t \t \t \t  Designed & Copyrighted \t \t \t \t"))
console.log(chalk.yellow("------------------------------------------------------------------------------------------------------------------------------"))
console.log(chalk.blue.underline("This is an Command line Application which gives you an information related to any fellow developer and current status of his Github Account "))
console.log("\n")
let user = readlineSync.question(chalk.greenBright.bold.bgCyan("Enter the Github Username")+":")
function gitusers(){
    axios.get(`https://api.github.com/users/${user}`
,{
        auth:{
            username: "abdulquayyum-in",
            password: "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"
        } 
    })
    .then((res)=>{
        // console.log(res.data)
        console.log(chalk.greenBright.italic.bold("These are the details of specified user"))
        console.log(chalk.bgWhiteBright("                                                                "))
        console.log(chalk.green(" >> Fullname: ")+res.data.name)
        console.log(chalk.green(" >> Email: ")+res.data.email)
        console.log(chalk.green(" >> Company: ")+res.data.company)
        console.log(chalk.green(" >> Bio:")+res.data.bio)
        console.log(chalk.green(" >> Public Repo:")+res.data.public_repos)
        console.log(chalk.green(" >> Private Repo:")+res.data.total_private_repos)
        console.log(chalk.green(" >> Followers:")+res.data.followers)
        console.log(chalk.green(" >> Following:")+res.data.following)
        // console.log(chalk.bgWhiteBright("                                                                "))

    })
    .catch((err)=>{
        console.log(err.response.message)
    })

}
gitusers()

function gitrepo(){

    axios.get(`https://api.github.com/users/${user}/repos`,{
        auth:{
            username: "abdulquayyum-in",
            password: "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"
        } 
    })
    .then(result=>{
        console.log(chalk.bgWhiteBright("                                                                "))
        console.log(chalk.greenBright.italic.bold("Top 5 Public Repositories of User"))
        for(let i=0;i<5;i++){
            console.log(result.data[i].name)
        }
      })
    .catch((err)=>{
        console.log(err.message)
    })
    
}
gitrepo()