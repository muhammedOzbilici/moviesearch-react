## Movie Search panel with React

After you run Spring Boot container on docker, then run React container.  

```
docker run -it -p 3000:3000  moviesearch-react  
```

You need to link these two container  

```
docker run -d -P -link moviesearch-react moviesearch  

```
