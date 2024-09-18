import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { Box, Grid, Card, CardContent, Checkbox, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export function ToDoList() {
    const todos = useQuery(api.functions.listTodos);
    
    return (
        <Box sx={{ mt: 2, px: 2 }}>
            <Grid container spacing={3}>
              {/* <Stack direction="column" spacing={3}> */}
                {todos?.map(({ _id, title, description, completed }, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ToDoItem
                            id={_id}
                            title={title}
                            description={description}
                            completed={completed}
                        />
                    </Grid>
                ))}
                {/* </Stack> */}
            </Grid>
        </Box>
    );
}

function ToDoItem({ id, title, description, completed }: 
  { id: Id<"todos">; title: string; description: string; completed: boolean; }) {
  
  const updateTodo = useMutation(api.functions.updateTodo);
  const deleteTodo = useMutation(api.functions.deleteTodo);
  
  return (
    <Card variant="outlined" sx={{ height: '100%', justifyContent: "fitContent", display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>

        <Box display="flex" alignItems="center" mb={1.5}>
          <Checkbox 
            checked={completed} 
            onChange={e => updateTodo({ id, completed: e.target.checked })} 
            color="primary"
            size="large"
          />

          <Typography variant="subtitle1" component="div" sx={{ textDecoration: completed ? 'line-through' : 'none', flexGrow: 1 }}>
            {title}
          </Typography>
        </Box>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
      </CardContent>

      <Box sx={{ p: 1, textAlign: 'right' }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => deleteTodo({ id })}
        >
          Remove
        </Button>
      </Box>

    </Card>
  );
}
