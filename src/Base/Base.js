import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Base({ title, description, children }) {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            <nav>
                <header>
                    <AppBar position="fixed">
                        <Toolbar variant="dense">
                            <IconButton onClick={() => navigate("/")} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                Students-App
                            </IconButton>
                            <IconButton onClick={() => navigate("/")} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                Students
                            </IconButton>
                            <IconButton onClick={() => navigate("/add-students")} edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                Add Students
                            </IconButton>
                            <IconButton onClick={() => navigate("/edit-students")} edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                Update Students
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                </header>
            </nav>
            <main>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <div className='contents'>
                    {children}
                </div>
            </main>
            <footer>

            </footer>

        </div>
    )
}

export default Base