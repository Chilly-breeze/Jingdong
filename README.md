# hybrid-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## a=>c (需要刷新) b=>c(不需要刷新))

c 的 router 设置 meta:{keepAlive:true,isBack:false}

beforeRouteEnter(to,from,next){
    if(from.name === a){
        to.meta.isBack == true
    }
    next()
    
}

activated(){
    if(this.$route.meta.isBack || this.isFirstEnter) {
        this.list = []
        this.axios()
    }
    this.$route.meta.isBack == false
    this.isFirstEnter = false
}
mounted(){
    this.isFirstEnter = true
}
