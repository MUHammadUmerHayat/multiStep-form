import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import UserDetails from './Form/UserDetails';
import Privacy from './Form/Privacy';
import Review from './Form/Review';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['User Details', 'Privacy', 'Review'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <UserDetails />;
    case 1:
      return <Privacy />;
    case 2:
      return <Review />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function Strapper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  // const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        getStepContent(activeStep)
      }
    </div>
  );
}