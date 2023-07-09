import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        title="common-heading"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8989338414235!2d77.28965652487467!3d19.112089182099943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b9903d053d%3A0x2c5238a90ab55c03!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1688394449260!5m2!1sen!2sin"
        width="100%"
        height="400"
        style= {{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form 
            action="https://formspree.io/f/mvojpnev" 
            method = "POST" 
            className="contact-inputs">
            
            <input 
              type="text"
              placeholder="username"
              name="username"
              autocomplete="off"
              required
              // value=""
            />
            <input 
              type="email" 
              name="Email" 
              placeholder="Email Address"
              autoComplete="off"
              required
              // value="" 
            />
            <textarea
              name="Message" 
              cols="30" 
              rows="10"
              autoComplete="off"
              placeholder="Enter Your Message"
              required
            ></textarea>
            
            <input type="submit" value="send" />
            
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
