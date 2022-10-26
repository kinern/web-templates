import React, {useEffect, useState} from 'react';
import {
    Container, 
    Button,
    Box, 
    Divider, 
    Grid, 
    FormControl, 
    InputLabel, 
    Pagination, 
    MenuItem, 
    Select, 
    Typography,
    TextField
} from '@mui/material';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import axios from 'axios';

const exampleUserNames = [
    'Daria Morgendorffer',
    'Jane Lane',
    'Sandi Griffin',
    'Stacy Rowe',
    'Trent Lane',
    'Quinn Morgendorffer',
    'Jodi Landon',
    'Brittany Taylor',
    'Kevin Thompson',
    'Andrea',
    'Anthony DeMartino',
    'Claire Defoe',
    'Timmothy O\'Neill',
];


const BlogPostResults = () => {
    const [posts, setPosts] = useState([]);
    const [totalPosts, setTotalPosts] = useState(100);
    const [inputTerm, setInputTerm] = useState('');
    const [filter, setFilter] = useState({
        sortType:'userId', 
        sortDirection:'asc', 
        sortLabel: 'userIdAsc', 
        limit:'10', 
        currentPage: 1,
        term: '',
    });

    const createQuery = () => {
        const params = [];
        params.push(`_sort=${filter.sortType}`);
        params.push(`_order=${filter.sortDirection}`);
        params.push(`_limit=${filter.limit}`);
        params.push(`_page=${filter.currentPage}`);
        if (filter.term != ''){
            params.push(`body_like=${filter.term}`);
        }
        if (params.length > 0){
            return `?${params.join('&')}`;
        } else {
            return '';
        }
    }

    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts${createQuery()}`)
        .then(function (response) {
            console.log(response);
            if (!Object.prototype.hasOwnProperty.call(response, 'data')) return;
            setTotalPosts(response.headers['x-total-count']);
            setPosts(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect(()=>{
        getPosts();
    }, []);

    useEffect(()=>{
        getPosts();
    },[filter]);

    useEffect(()=>{
        console.log('posts', posts);
    }, [posts]);

    const changePage = (event, value) => {
        setFilter({...filter, currentPage: value});
    };

    const changeLimit = (event) => {
        setFilter({...filter, currentPage: 1, 'limit':event.target.value});
    };

    const changeSort = (event)=> {
        //switch
    }

    const changeTerm = (event) => {
        setInputTerm(event.target.value);
    }

    const handleSearch = () => {
        setFilter({...filter, term: inputTerm});
    }

    return(
        <Container maxWidth={false} disableGutters sx={{height: '100%', backgroundColor:'#DDD'}}>
            <Box className="top" sx={{width:'100%'}}>
                <Typography variant={'h2'}>Blog Posts</Typography>
            </Box>
            <Grid container>
            <Grid item xs={12} sm={9} sx={{backgroundColor: '#DDD'}} className="results">
            {posts.map((item)=>{
                return(
                <Box sx={{background:'#FFF', margin:'16px auto', padding:'16px', 'width':'80%', 'maxWidth': '600px'}}>
                    <Typography sx={{textAlign:'center'}} variant={'h5'}>{item.title}</Typography>
                    <Divider sx={{margin:'22px auto'}} />
                    <Typography variant={'body1'}>{item.body}</Typography>
                    <Box sx={{marginTop:'22px', display:'flex', justifyContent:'space-between'}}>
                    <Typography variant={'body2'}>Post by {exampleUserNames[item.userId]} ({item.userId})</Typography>
                    <Typography variant={'body2'}>Post Id: {item.id}</Typography>
                    </Box>
                </Box>
                );
            })}
            <Pagination 
            sx={{margin:'22px auto', width:'fit-content', textAlign:'center'}}
            count={Math.ceil(totalPosts / filter.limit)} 
            page={filter.currentPage} 
            onChange={changePage}
            />
            </Grid>
            <Grid xs={12} sm={3} sx={{backgroundColor: '#EEE'}}className="sort">
                <FormControl sx={{margin:'8px', width: '80%', maxWidth:'200px'}}>
                    <InputLabel id="sort-select-label">Sort</InputLabel>
                    <Select
                    label="Sort"
                    value={filter.sortLabel}
                    onChange={changeSort}
                    >
                        <MenuItem value={"userIdAsc"}>User ID Ascending</MenuItem>
                        <MenuItem value={"userIdDesc"}>User ID Descending</MenuItem>
                        <MenuItem value={"titleAsc"}>Title A-Z</MenuItem>
                        <MenuItem value={"titleDesc"}>Title Z-A</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{margin:'8px', width: '80%', maxWidth:'200px'}}>
                    <InputLabel id="per-page-select-label">Per Page</InputLabel>
                    <Select
                    label="Per Page"
                    value={filter.limit}
                    onChange={changeLimit}
                    >
                        <MenuItem value={"5"}>5</MenuItem>
                        <MenuItem value={"10"}>10</MenuItem>
                        <MenuItem value={"25"}>25</MenuItem>
                        <MenuItem value={"50"}>50</MenuItem>
                    </Select>
                </FormControl>
                <Typography sx={{margin:'8px'}} variant={'h6'}>Post Body Search</Typography>
                <Box sx={{margin:'8px', display:'flex', alignItems:'center'}}>
                <TextField value={inputTerm} onChange={changeTerm}></TextField><Button onClick={handleSearch} sx={{padding: '11px 16px'}} variant="contained"><SavedSearchIcon fontSize="large"/></Button>
                </Box>
            </Grid>
            </Grid>
            <Box className="footer"></Box>
        </Container>
    );
};

export default BlogPostResults;