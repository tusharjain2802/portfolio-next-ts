import TextDesign from "@/app/common/textDesign";
import { Button, Typography } from "@mui/material";

export default function ContactSection() {
    return (
        <section id="contact" className="!py-20 !px-[9%] !text-black">
            <h2 className="!font-ubuntu !text-center !text-[30px] md:!text-[42px] !pt-[2rem] !font-[600]">Contact Me</h2>
            <TextDesign>Get in touch</TextDesign>
            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
                <div>
                    <Typography className="!font-bold" variant="h6" >Get in Touch</Typography>

                    <Typography variant="h6" > I love to connecting with different people from around the world, feel free to reach out. 😊 💜</Typography>

                    <Typography className="!mt-6 !font-bold" variant="h6" > Address</Typography>
                    <Typography variant="body1" > Ludhiana, India</Typography>
                    <Typography className="!font-bold !mt-2" variant="h6" >Email</Typography>
                    <Typography variant="body1" >tjain2_be20@thapar.edu</Typography>
                </div>
                <div>
                    <Typography className="!font-bold" variant="h6" > Connect with me on LinkedIn</Typography>
                    <Button
                        sx={{
                            backgroundColor: '#DC143C',
                        }}
                        target="_blank"
                        className="!mt-[13px]"
                        size="large" aria-label="linkedIn Profile"
                        variant="contained"
                        href="https://www.linkedin.com/in/tushar-jain-94a6a2194/">
                            Connect
                    </Button>
                </div>

            </div>

        </section>
    );
}
