## Movie Search panel with React

Frontend side for Movie Search Application

![alt text](https://user-images.githubusercontent.com/7340804/67688637-370f8a80-f9ab-11e9-937e-ed6d5263369c.png)

After you run Spring Boot container on docker, then run React container.  

```
docker build . -t moviesearch-react  
docker run -it -p 3000:3000  moviesearch-react  
```

You need to link these two container  

```
docker run -d -P -link moviesearch-react moviesearch  

```
