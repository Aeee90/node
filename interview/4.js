const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function getMovieTitles(substr) {
    const getOptions =(_=>{
        const path =  `/api/movies/search/?Title=${substr}`,
            options={
                host: 'jsonmock.hackerrank.com',
                agent: false
            };
        return pageNum => {
            options.path = pageNum?`${path}&page=${pageNum}` : path;
            return options;
        };
    })();
    const titles = [];
    let totalPage = 0, total = -1;

    const titleReq = pageNum => {
        return new Promise(_ =>{
            https.get(getOptions(pageNum), (res) => {
                res.on('data', function (body) {
                    for(let data of JSON.parse(body).data){
                        titles.push(data.Title);
                    }

                    if(titles.length == total)
                        console.log(titles.sort().join('\n'));
                });
            });
        });
    }
    const totalPageReq = new Promise(_=>{
        https.get(getOptions(), (res) => {
            res.on('data', function (body) {
                const data = JSON.parse(body);
                totalPage = data.total_pages;
                total = data.total;
                Promise.all(Array.from(new Array(totalPage), (v,i)=>i+1).map(v=>{
                    return titleReq(v);
                })).then();
            });
        });
    }).then();
}


getMovieTitles('spiderman');