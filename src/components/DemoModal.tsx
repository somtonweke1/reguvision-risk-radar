
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-space text-reguvision-deep-blue">
            ReguVision AI Failure Prediction Demo
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="flex-1 bg-gray-100 m-6 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-reguvision-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">▶️</span>
            </div>
            <h3 className="text-xl font-semibold text-reguvision-deep-blue mb-2">
              Interactive Demo
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              See how ReguVision AI predicted the FTX regulatory collapse 
              6 months before it happened, and prevented $200M in losses.
            </p>
            <Button className="bg-reguvision-trust-blue hover:bg-reguvision-trust-blue/90">
              Schedule Personal Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
